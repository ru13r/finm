<template lang="pug">
.q-pa-md
  q-table.my-sticky-header-column-table(
    title='Model View',
    row-key='name',
    :data='tableData',
    :columns='columns',
    dense,
    flat,
    :pagination='pagination',
    hide-bottom,
    separator='none'
  )
    template(v-slot:body-cell='props')
      q-td(
        :class='(props.row.type ==="title") ? "bg-primary text-white" : ""'
      )
        number-cell(:value='props.value')
    template(v-slot:top-row)
      q-tr
        q-td(colspan='100%') &nbsp;
    template(v-slot:bottom-row)
      q-tr
        q-td(colspan='100%') &nbsp;
</template>
<script>
import NumberCell from 'components/NumberCell';
import { Timeline } from 'src/types/Timeline';

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

const blockToRows = (block, hasTotal) => [
  {
    label: block.tag.title,
    type: 'title',
  },
  ...block.data.map(lineToRow),
  {
    label: '',
  },
];

const headerClasses = 'bg-primary text-white';

export default {
  name: 'ModelViewer',
  components: { NumberCell },
  props: {
    blocks: {
      type: Array,
      default: () => [],
    },
  },
  data: () => ({
    pagination: {
      rowsPerPage: 999,
    },
  }),
  computed: {
    columns: () => [
      // Label column
      {
        name: 'label',
        label: 'Caption',
        field: 'label',
        required: true,
        align: 'left',
        sortable: false,
        headerClasses: headerClasses,
      },
      // Unit column
      {
        name: 'unit',
        label: 'U',
        field: 'unit',
        required: true,
        align: 'left',
        sortable: false,
        headerClasses: headerClasses,
      },
      // Data (period) columns
      ...Timeline.map((x, i) => ({
        name: getPeriodName(i),
        label: x.toString(),
        field: getPeriodName(i),
        required: true,
        align: 'right',
        sortable: false,
        headerClasses: headerClasses,
      })),
    ],
    tableData: ({ blocks }) => [...blocks.flatMap(blockToRows)],
  },
};
</script>

<style lang="sass">
.my-sticky-header-column-table
  /* height and width are important */
  height: 500px
  max-width: 1000px

  td
    z-index: 0

  tr td:first-child
    /* bg color is important for td; just specify one */
    background-color: #fff
    z-index: 1

  thead tr th
    position: sticky
    z-index: 1
    background: $primary !important

  thead tr:first-child th
    top: 0
    z-index: 2
  tr:first-child th:first-child
    /* highest z-index */
    z-index: 3

  td:first-child, th:first-child
    position: sticky
    left: 0
</style>
