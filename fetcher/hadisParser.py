from openpyxl import load_workbook
import json
wb = load_workbook(filename='files/hadis.xlsx', read_only=True)
ws = wb['Sheet1'] # ws is now an IterableWorksheet
lst = {}
counter = 0
for row in ws.rows:
	lst[str(counter)] = []
	for idx in range(0,len(row),3):
		if row[idx].value != None or row[idx+1].value != None or row[idx+2].value != None:
			lst[str(counter)].append({'text':row[idx].value,
																'translate':row[idx+1].value,
																'from':row[idx+2].value})
	#print "########>> %s finished"%(str(counter))
	counter +=1
finalLst = {}
for lKey in lst:
	if len(lst[lKey])==0:
		print "%s is empty"%(lKey)
	else:
		finalLst[lKey] = lst[lKey]

with open('hadis.json', 'w') as outfile:
	json.dump(lst, outfile)