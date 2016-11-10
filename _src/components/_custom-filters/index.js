/*global angular */

"use strict";

import ReverseLetterFilter from "./reverse-letter/reverse-letter.filter.js";
import SortCustomerFilter  from "./sort-customer/sort-customer.filter.js";


const CustomFilters = angular.module("CustomFilters", [])
    .filter("reverseLetter", () => ReverseLetterFilter.Factory)
    .filter("sortCustomers", () => SortCustomerFilter.Factory)
    .name;

export default CustomFilters;