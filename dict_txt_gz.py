import gzip
# areacode = '555'
f = gzip.open('dict.txt.gz', 'wb')

for x in range(100000000):
  f.write("%08d\n" % (x))
  # f.write("%s%07d\n" % (areacode, x))
f.close()