import {initialEmployeeList} from '../util/initialState';

describe('Change EmployeeList functions should work properly', () => {
  let employeeList = defaultEmployeeList;
  let firstEmployee = employeeList[0];
  let lastEmployee = employeeList.slice(-1)[0];

  describe('ChangeActiveStatus should work properly', () => {
    it('should assign active to false properly', () => {
      changeActiveStatus(employeeList, firstEmployee.id, false);
      expect(firstEmployee.isActive).toBe(false);
      changeActiveStatus(employeeList, lastEmployee.id, false);
      expect(lastEmployee.isActive).toBe(false);
    }),
    it('should assign active to true properly', () => {
      changeActiveStatus(employeeList, firstEmployee.id, true);
      expect(firstEmployee.isActive).toBe(true);
      changeActiveStatus(employeeList, lastEmployee.id, true);
      expect(lastEmployee.isActive).toBe(true);
    }),
    it('should toggle properly', () => {
      changeActiveStatus(employeeList, firstEmployee.id);
      expect(firstEmployee.isActive).toBe(false);
      changeActiveStatus(employeeList, firstEmployee.id);
      expect(firstEmployee.isActive).toBe(true);
    })
  });

  // describe('ChangeName should work properly', () => {
  //   it('should change name', () => {
  //     let originalNameStr = firstEmployee.nameString;
  //     changeName(employeeList, firstEmployee.id, 'Hanbo', 'Zhang');
  //     expect(firstEmployee.nameString === originalNameStr).toBeFalsy;
  //     changeName(employeeList, firstEmployee.id, 'Han', 'Yan'); // change back
  //   }),
  //   it('should change name properly from not having a middle name to having one', () => {
  //     expect(firstEmployee.nameString.split(' ')).toHaveLength(2);
  //     changeName(employeeList, firstEmployee.id, 'Han', 'Yan', 'M');
  //     expect(firstEmployee.nameString.split(' ')).toHaveLength(3);
  //     changeName(employeeList, firstEmployee.id, 'Han', 'Yan'); // change back
  //   }),
  //   it('should change name properly from having a middle name to not having one', () => {
  //     expect(lastEmployee.nameString.split(' ')).toHaveLength(3);
  //     changeName(employeeList, lastEmployee.id, 'Steve', 'Jovanelly');
  //     expect(lastEmployee.nameString.split(' ')).toHaveLength(2);
  //     changeName(employeeList, lastEmployee.id, 'Steve', 'Jovanelly', 'J'); // change back
  //   })
  // })

})
