from openpyxl import load_workbook
import json
wb = load_workbook(filename='files/allHadises.xlsx', read_only=True)
ws = wb['Sheet1'] # ws is now an IterableWorksheet
lst = []
counter = 1
for row in ws.rows:
	lst.append({'text':row[0].value,
														'translate':row[1].value,
														'from':row[2].value})

with open('allHadises.json', 'w') as outfile:
	json.dump(lst, outfile)