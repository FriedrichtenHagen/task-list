/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
/*!********************!*\
  !*** ./src/dom.js ***!
  \********************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "toggleProjectInput": () => (/* binding */ toggleProjectInput),
/* harmony export */   "toggleTaskInput": () => (/* binding */ toggleTaskInput)
/* harmony export */ });
function toggleProjectInput() {
  const inputProjectForm = document.querySelector(".inputFormProject");
  const inputScreenProject = document.querySelector(".inputScreenProject");
  inputProjectForm.classList.toggle("active");
  inputScreenProject.classList.toggle("active");
}
function toggleTaskInput() {
  const inputFormTask = document.querySelector(".inputFormTask");
  const inputScreenTask = document.querySelector(".inputScreenTask");
  inputFormTask.classList.toggle("active");
  inputScreenTask.classList.toggle("active");
}
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZG9tLmJ1bmRsZS5qcyIsIm1hcHBpbmdzIjoiOztVQUFBO1VBQ0E7Ozs7O1dDREE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7QUNOTyxTQUFTQSxrQkFBa0IsR0FBRTtFQUNsQyxNQUFNQyxnQkFBZ0IsR0FBR0MsUUFBUSxDQUFDQyxhQUFhLENBQUMsbUJBQW1CLENBQUM7RUFDcEUsTUFBTUMsa0JBQWtCLEdBQUdGLFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLHFCQUFxQixDQUFDO0VBRXhFRixnQkFBZ0IsQ0FBQ0ksU0FBUyxDQUFDQyxNQUFNLENBQUMsUUFBUSxDQUFDO0VBQzNDRixrQkFBa0IsQ0FBQ0MsU0FBUyxDQUFDQyxNQUFNLENBQUMsUUFBUSxDQUFDO0FBQy9DO0FBRU8sU0FBU0MsZUFBZSxHQUFFO0VBQy9CLE1BQU1DLGFBQWEsR0FBR04sUUFBUSxDQUFDQyxhQUFhLENBQUMsZ0JBQWdCLENBQUM7RUFDOUQsTUFBTU0sZUFBZSxHQUFHUCxRQUFRLENBQUNDLGFBQWEsQ0FBQyxrQkFBa0IsQ0FBQztFQUVsRUssYUFBYSxDQUFDSCxTQUFTLENBQUNDLE1BQU0sQ0FBQyxRQUFRLENBQUM7RUFDeENHLGVBQWUsQ0FBQ0osU0FBUyxDQUFDQyxNQUFNLENBQUMsUUFBUSxDQUFDO0FBQzVDLEMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90YXNrLWxpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdGFzay1saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90YXNrLWxpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90YXNrLWxpc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90YXNrLWxpc3QvLi9zcmMvZG9tLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIFRoZSByZXF1aXJlIHNjb3BlXG52YXIgX193ZWJwYWNrX3JlcXVpcmVfXyA9IHt9O1xuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiZXhwb3J0IGZ1bmN0aW9uIHRvZ2dsZVByb2plY3RJbnB1dCgpe1xuICBjb25zdCBpbnB1dFByb2plY3RGb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5pbnB1dEZvcm1Qcm9qZWN0XCIpO1xuICBjb25zdCBpbnB1dFNjcmVlblByb2plY3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmlucHV0U2NyZWVuUHJvamVjdFwiKTtcblxuICBpbnB1dFByb2plY3RGb3JtLmNsYXNzTGlzdC50b2dnbGUoXCJhY3RpdmVcIilcbiAgaW5wdXRTY3JlZW5Qcm9qZWN0LmNsYXNzTGlzdC50b2dnbGUoXCJhY3RpdmVcIilcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHRvZ2dsZVRhc2tJbnB1dCgpe1xuICBjb25zdCBpbnB1dEZvcm1UYXNrID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5pbnB1dEZvcm1UYXNrXCIpO1xuICBjb25zdCBpbnB1dFNjcmVlblRhc2sgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmlucHV0U2NyZWVuVGFza1wiKTtcblxuICBpbnB1dEZvcm1UYXNrLmNsYXNzTGlzdC50b2dnbGUoXCJhY3RpdmVcIilcbiAgaW5wdXRTY3JlZW5UYXNrLmNsYXNzTGlzdC50b2dnbGUoXCJhY3RpdmVcIilcbn1cblxuXG5cblxuXG4iXSwibmFtZXMiOlsidG9nZ2xlUHJvamVjdElucHV0IiwiaW5wdXRQcm9qZWN0Rm9ybSIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsImlucHV0U2NyZWVuUHJvamVjdCIsImNsYXNzTGlzdCIsInRvZ2dsZSIsInRvZ2dsZVRhc2tJbnB1dCIsImlucHV0Rm9ybVRhc2siLCJpbnB1dFNjcmVlblRhc2siXSwic291cmNlUm9vdCI6IiJ9