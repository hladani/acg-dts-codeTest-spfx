import * as React from 'react';
import styles from './CodeTestPart.module.scss';
import { ICodeTestPartProps } from './ICodeTestPartProps';
import { escape } from '@microsoft/sp-lodash-subset';
import { DetailsList, DetailsListLayoutMode, Selection, IColumn } from 'office-ui-fabric-react/lib/DetailsList';

export interface IDetailsListBasicExampleItem {
  key: number;
  name: string;
  status: string;
}

export interface IDetailsListBasicExampleState {
  items: IDetailsListBasicExampleItem[];
}

export default class CodeTestPart extends React.Component<ICodeTestPartProps, IDetailsListBasicExampleState> {
  private _selection: Selection;
  private _allItems: IDetailsListBasicExampleItem[];
  private _columns: IColumn[];

  constructor(props: ICodeTestPartProps) {
    super(props);

    // Populate with items for demos.
    this._allItems = [
      {
        key: 0,
        name: 'Add more items to this list',
        status: 'To Do',
      },
       //---Added by Hitesh Ladani on 10/06/2021----------//
      {
        key: 1,
        name: 'Web page developement',
        status: 'Done',
      },
      {
        key: 2,
        name: 'Database update',
        status: 'Done',
      },
      {
        key: 3,
        name: 'Push to development server',
        status: 'Not started',
      },
      //------Finished 10/06/2021 To do changes-------//
    ];

    this._columns = [
      { key: 'column1', name: 'Task Name', fieldName: 'name', minWidth: 100, maxWidth: 200, isResizable: true },
      { key: 'column2', name: 'Status', fieldName: 'status', minWidth: 100, maxWidth: 200, isResizable: true },
    ];

    this.state = {
      items: this._allItems,
    };
  }
  public render(): React.ReactElement<ICodeTestPartProps> {
    const { items } = this.state;
    return (
      <div className={styles.codeTestPart}>
        <div className={styles.container}>
          <div className={styles.row}>
            <div className={styles.column}>
              <span className={styles.title}>Welcome to SharePoint!</span>
              <p className={styles.subTitle}>Customize SharePoint experiences using Web Parts.</p>
              <p className={styles.description}>{escape(this.props.description)}</p>
              <DetailsList
                items={items}
                columns={this._columns}
                setKey="set"
                layoutMode={DetailsListLayoutMode.justified}
                selection={this._selection}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
