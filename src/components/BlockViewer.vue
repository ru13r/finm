<template lang="pug">
q-table(
  row-key='name',
  :data='tableData',
  :columns='columns',
  dense,
  hide-bottom
  hide-header
)
  template(v-slot:body-cell="props")
    q-td
      number-cell(:value="props.value")
  template(v-slot:top-row)
    q-tr
      q-td(colspan="100%").bg-primary.text-white {{ title }}
  template(v-slot:bottom-row)
    q-tr
      q-td(colspan="100%") &nbsp;

</template>

<script>
import { Timeline } from 'src/types/Timeline';
import NumberCell from "components/NumberCell";

/*
  name is required to link index and data
  getPeriodName :: Int -> String
  1 -> 'p1', 2 -> 'p2'
 */
const getPeriodName = i => 'p' + i.toString();

/*
lineToRow :: Line -> { data object for Quasar Table }
 */
const lineToRow = line => {
  const obj = {
    label: line.tag.label,
    unit: line.tag.unit,
  };
  line.data.forEach((x, i) => {
    obj[getPeriodName(i)] = x;
  });
  return obj;
};

export default {
  name: 'BlockViewer',
  components: {NumberCell},
  props: {
    block: {
      type: Object,
      default: () => {},
    },
  },
  data: () => ({}),
  computed: {
    title: ({ block }) => block.tag.title,
    columns: () => [
      // Label column
      {
        name: 'label',
        label: 'Caption',
        field: 'label',
        required: true,
        align: 'left',
        sortable: false,
        classes: 'bg-grey-2',
        headerClasses: 'bg-primary text-white'
      },
      // Unit column
      {
        name: 'unit',
        label: 'U',
        field: 'unit',
        required: true,
        align: 'left',
        sortable: false,
        classes: 'bg-grey-2',
        headerClasses: 'bg-primary text-white'
      },
      // Data (period) columns
      ...Timeline.map((x, i) => ({
        name: getPeriodName(i),
        label: x.toString(),
        field: getPeriodName(i),
        required: true,
        align: 'right',
        sortable: false,
        headerClasses: 'bg-primary text-white',
      })),
    ],
    tableData: ({ block }) => block.data.map(lineToRow),
  },

};
</script>

<style scoped></style>
