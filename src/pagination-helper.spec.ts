
import { PaginationHelper } from './pagination-helper';

/*   
Class Usage:

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

describe("Pagination Helper class", () => {

    const helper = new PaginationHelper(['a','b','c','d','e','f'], 4);

    it("should return itemCount", ()=> { 
        expect(helper.itemCount).toBe(6);
    });

    it("should return pageCount", () => {
        expect(helper.pageCount).toBe(2);
    })

    it("should calculate Page Index", ()=> {
        expect(helper.pageIndex(5)).toBe(1); 
        expect(helper.pageIndex(2)).toBe(0); 
        expect(helper.pageIndex(20)).toBe(-1); 
        expect(helper.pageIndex(-10)).toBe(-1); 
    });

    it("should calculate Page Item Count Index", ()=> {        
        expect(helper.pageItemCount(0)).toBe(4);         
        expect(helper.pageItemCount(1)).toBe(2); 
        expect(helper.pageItemCount(2)).toBe(-1); 
    });
});