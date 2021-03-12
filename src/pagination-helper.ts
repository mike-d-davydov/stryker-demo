/* 

** Requirements: **

The class is designed to take in an array of values and an integer indicating how many items will be allowed per each page. \ 
The types of values contained within the collection/array are not relevant.

The following are some examples of how this class is used:

helper = PaginationHelper.new(['a','b','c','d','e','f'], 4)

helper.pageCount # should == 2

helper.itemCount # should == 6

helper.pageItemCount(0)  # should == 4
helper.pageItemCount(1) # last page - should == 2
helper.pageItemCount(2) # should == -1 since the page is invalid

// page_index takes an item index and returns the page that it belongs on

helper.pageIndex(5) # should == 1 (zero based index)
helper.pageIndex(2) # should == 0
helper.pageIndex(20) # should == -1
helper.pageIndex(-10) # should == -1 because negative indexes are invalid

*/

export class PaginationHelper {
  constructor(private elements: any[], private pageSize: number) {}

  public get pageCount(): number {
    return Math.ceil(this.elements.length / this.pageSize);
  }

  public get itemCount(): number {
    return this.elements.length;
  }

  public pageIndex(elementIndex: number): number {
    if (elementIndex > this.itemCount - 1 || elementIndex < 0) {
      return -1;
    }
    return Math.floor(elementIndex / this.pageSize);
  }

  public pageItemCount(pageIndex: number): number {
    if (pageIndex < 0) {
      return -1;
    }

    if (pageIndex < this.pageCount - 1) {
      return this.pageSize;
    } else if (pageIndex == this.pageCount - 1) {
      return this.pageSize - (this.itemCount % this.pageSize);
    } else {
      return -1;
    }
  }
}
