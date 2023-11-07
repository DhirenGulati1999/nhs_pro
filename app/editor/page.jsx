"use client"
import { Editor, EditorTools } from '@progress/kendo-react-editor';
import { useState } from 'react'   
import { Grid, GridColumn } from "@progress/kendo-react-grid";
import { DropDownList } from "@progress/kendo-react-dropdowns";
import products from "./products.json";
import categories from "./categories.json";
const {
    Bold,
    Italic,
    Underline,
    AlignLeft,
    AlignRight,
    AlignCenter,
    Indent,
    Outdent,
    OrderedList,
    UnorderedList,
    Undo,
    Redo,
    Link,
    Unlink
    } = EditorTools;
 
export default function Counter() {
  const [count, setCount] = useState(0)
 
  return (
    <>
    <Grid data={products}>
  <GridColumn field="ProductName" />
  <GridColumn field="UnitPrice" />
  <GridColumn field="UnitsInStock" />
  <GridColumn field="Discontinued" />
</Grid>
<p>
  <DropDownList
    data={categories}
    dataItemKey="CategoryID"
    textField="CategoryName"
  />
</p></>
)
}