# SDET Engineer Exercise

In this excercise we will see how you are able to handle an work assignment, such as implementing and testing a new class.

Below we'll be referencing some imaginary circumstances of this work assignment.

- Estimated Time: 30-90 mins depending on experience (this deadline came from your Project manager, you may provide arguments, why you need more, though).

## Task overview

In a programming language of your choice, create a PaginationHelper class that might be used for implementation of pagination UI components and a set of Unit tests to properly test it.
Requirements for this component, came from client Product Manager. It is rather complete, but you may find that some use cases / acceptance criteria might be missing.

## Requirements for "production" code

Here are the requirements for PageHelper class, as they came from client's Product Manager:

```

/*

The class is designed to take in an array of values and an integer indicating how many items will be allowed per each page. \
The types of values contained within the collection/array are not relevant.

The following are some examples of how this class is used:

helper = PaginationHelper.new(['a','b','c','d','e','f'], 4)

helper.pageCount() # should == 2

helper.itemCount() # should == 6

helper.pageItemCount(0)  # should == 4
helper.pageItemCount(1) # last page - should == 2
helper.pageItemCount(2) # should == -1 since the page is invalid

// page_index takes an item index and returns the page that it belongs on

helper.pageIndex(5) # should == 1 (zero based index)
helper.pageIndex(2) # should == 0
helper.pageIndex(20) # should == -1
helper.pageIndex(-10) # should == -1 because negative indexes are invalid

*/
```

## Requirements for GitLab project:

- In case if requirements are incomplete, you should use your common sense to add missing requirements.
- Unit tests should be able to find any bug intentionally, or unintetionally introduced in the solution (e.g., if we can modify your solution in such a way that it won't match reasonable user expectation for its behavior), but tests are still passing, this means that you has failed the challenge.
- We expect production-quality code for this solution, meaning it is properly formatted and written in accordance with a coding standard of your choice. Also it should be self-documented using a tool such as JavaDoc, JsDoc, etc.
- We also expect your solution to be efficient, and code to be free of “bad code smells”
- Project should match open source standards, that is:
  - Have README document, explaining how to use the project, and how to run tests
  - It should only contain files necessary to run the project (as well as necessary documentation)
  - It should match any other requirements that sensible developer can expect from an open source project shared publicly on GitHub or similar resource.
