import {BaseElement} from './element';
import {step} from '../reporter'

class Table extends BaseElement {
  private transformData: object;
  constructor({page, selector, name}: {page?: any, selector: string, name?: string}) {
    // TODO selector should include all table
    // TABLE ROOT!
    super({page, selector, name});
  }

  set transformer(dataObj) {
    this.transformData = dataObj;
  }

  @step((name) => `${name} call get data`)
  async get() {
    const headerMap = await this.getHeaderMap();
    const data = await this.getBodyData(headerMap);
    if (this.transformData) {
      return this.transfromInutualData(data)
    }
    return data;
  }

  private transfromInutualData(data) {
    const transformKeys = Object.keys(this.transformData)
    return data.map((dataItem) => {
      const newDataItem = {}
      for (const key of transformKeys) {
        newDataItem[this.transformData[key]] = dataItem[key]
      }
      return newDataItem;
    })
  }


  private async getBodyData(neaderMap) {
    const data = [];
    const bodyRows = await this.currentElement.$$('table.machines_list tbody tr')
    for (const row of bodyRows) {
      data.push(await this.getRowData(row, neaderMap));
    }
    return data
  }

  private async getRowData(row, headerMap) {
    const rowCells = await row.$$('td');
    const rowData = {}
    for (const key of Object.keys(headerMap)) {
      rowData[key] = await rowCells[headerMap[key]].evaluate(node => node.textContent.trim())
    }
    return rowData;
  }

  private async getHeaderMap() {
    if (!this.currentElement) {
      await this.initElement();
    }
    const headerMap = {};
    const headerCells = await this.currentElement.$$('thead td')
    for (let i = 0; i < headerCells.length; i++) {
      headerMap[await headerCells[i].evaluate(node => node.textContent.trim())] = i
    }

    return headerMap;
  }
}

export {
  Table
}
