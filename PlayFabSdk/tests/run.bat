cd tests
set cd=%cd%
IF "%PF_TEST_TITLE_DATA_JSON%"=="" set PF_TEST_TITLE_DATA_JSON=./testTitleData.json
echo %cd%
nodeunit tests.js --reporter %cd%/reporter.js