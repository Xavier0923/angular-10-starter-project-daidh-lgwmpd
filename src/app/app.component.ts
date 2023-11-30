import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { Component, VERSION } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { AnimationEvent } from '@angular/animations';

export interface PeriodicElement {
  checkbox: boolean; // 多選
  inventoryStatus: boolean; // 盤點狀態
  assetName: string; // 資產名稱
  assetNo: number; // 資產編號
  keeper: string; // 保管人
  location: string; // 存放位置
  department: string; // 部門
  counter: string; // 盤點人
  place: string; // 盤點地點
  inventoryTime: string; // 盤點時間
  assetState: string; // 資產狀態
}

const ELEMENT_DATA: PeriodicElement[] = [
  {
    checkbox: false,
    inventoryStatus: true,
    assetNo: 1,
    assetName: 'Hydrogen',
    keeper: 'cti111111',
    location: 'H',
    department: '新聞部',
    counter: '國瑋',
    place: '資訊處',
    inventoryTime: '2023/11/30',
    assetState: '',
  },
  {
    checkbox: false,
    inventoryStatus: false,
    assetNo: 2,
    assetName: 'Helium',
    keeper: 'cti222222',
    location: 'He',
    department: '資訊處',
    counter: '國瑋',
    place: '資訊處',
    inventoryTime: '2023/11/30',
    assetState: '',
  },
  {
    checkbox: false,
    inventoryStatus: false,
    assetNo: 3,
    assetName: 'Lithium',
    keeper: 'cti333333',
    location: 'Li',
    department: '行館處',
    counter: '國瑋',
    place: '資訊處',
    inventoryTime: '2023/11/30',
    assetState: '',
  },
  {
    checkbox: false,
    inventoryStatus: true,
    assetNo: 4,
    assetName: 'Beryllium',
    keeper: 'cti444444',
    location: 'Be',
    department: '總務處',
    counter: '國瑋',
    place: '資訊處',
    inventoryTime: '2023/11/30',
    assetState: '',
  },
  {
    checkbox: false,
    inventoryStatus: false,
    assetNo: 5,
    assetName: 'Boron',
    keeper: 'cti555555',
    location: 'B',
    department: '財務處',
    counter: '國瑋',
    place: '資訊處',
    inventoryTime: '2023/11/30',
    assetState: '',
  },
  {
    checkbox: false,
    inventoryStatus: false,
    assetNo: 6,
    assetName: 'Carbon',
    keeper: 'cti666666',
    location: 'C',
    department: '法務部',
    counter: '國瑋',
    place: '資訊處',
    inventoryTime: '2023/11/30',
    assetState: '',
  },
  {
    checkbox: false,
    inventoryStatus: false,
    assetNo: 7,
    assetName: 'Nitrogen',
    keeper: 'cti777777',
    location: 'N',
    department: '總經理室',
    counter: '國瑋',
    place: '資訊處',
    inventoryTime: '2023/11/30',
    assetState: '',
  },
  {
    checkbox: false,
    inventoryStatus: false,
    assetNo: 8,
    assetName: 'Oxygen',
    keeper: 'cti888888',
    location: 'O',
    department: '版權戲劇部',
    counter: '國瑋',
    place: '資訊處',
    inventoryTime: '2023/11/30',
    assetState: '',
  },
  {
    checkbox: false,
    inventoryStatus: false,
    assetNo: 9,
    assetName: 'Fluorine',
    keeper: 'cti999999',
    location: 'F',
    department: '系統推廣部',
    counter: '國瑋',
    place: '資訊處',
    inventoryTime: '2023/11/30',
    assetState: '',
  },
  {
    checkbox: false,
    inventoryStatus: false,
    assetNo: 10,
    assetName: 'Neon',
    keeper: 'cti000000',
    location: 'Ne',
    department: '新媒體公關行銷處',
    counter: '國瑋',
    place: '資訊處',
    inventoryTime: '2023/11/30',
    assetState: '',
  },
];

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    trigger('expandedDetail', [
      state(
        'expanded',
        style({
          height: '*',
        })
      ),
      state(
        'collapsed',
        style({
          height: '0px',
          minHeight: '0',
          display: 'none',
        })
      ),
      transition(
        'expanded <=> collapsed',
        animate('300ms cubic-bezier(0.4, 0.0, 0.2, 1)')
      ),
    ]),
  ],
})
export class AppComponent {
  name = 'Angular ' + VERSION.full;
  displayedColumns: string[] = [
    'checkbox',
    'inventoryStatus',
    'assetNo',
    'assetName',
    'counter',
    'place',
    'inventoryTime',
  ];
  dataSource = ELEMENT_DATA;
  expandedElement: PeriodicElement;
  assetForm!: FormGroup;

  // 測試多選
  toppings = new FormControl();
  toppingList: string[] = [
    'Extra cheese',
    'Mushroom',
    'Onion',
    'Pepperoni',
    'Sausage',
    'Tomato',
  ];

  constructor(private fb: FormBuilder) {}
  ngOnInit() {}

  rowSelect(row: any) {}

  expandedDetail(row: any) {
    if (this.expandedElement === row) {
      this.expandedElement = null;
    } else {
      this.expandedElement = row;
    }
  }

  captureDoneEvent(state: string, data: any) {
    console.log('動畫完成', state);
    console.log('資料', data);
    // the toState, fromState and totalTime data is accessible from the event variable
  }
}
