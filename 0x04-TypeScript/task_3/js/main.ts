/// <reference path='crud.d.ts' />
import {RowID, RowElement} from interface
import * from crud as CRUD

const row: RowElement = {
  firstName: 'Guillaume',
  lastName: 'Salva'
}

const newRowID: RowID = CRUD.insertRow(row);

const updatedRow: RowElement = { ...row, age: 23 }

updateRow(newRowID, updatedRow);
deleteRow(newRowID);
