cd tests
set cd=%cd%
set PF_TEST_TITLE_DATA_JSON=./testTitleData.js
echo %cd%
nodeunit tests.js --reporter %cd%/reporter.js