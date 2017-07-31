import pymysql
import random
import time


def test(key, value, conn):

	# 使用cursor()方法获取操作游标
	cursor = conn.cursor()

	# 存
	cmd = "insert into KvStorage VALUES ('" + key + "','" + value + "');"

	# print(cmd)
	# 使用execute方法执行SQL语句
	cursor.execute(cmd)
	conn.commit()

	# 取
	cmd = "select myvalue from KvStorage where mykey = '" + key + "';"
	cursor.execute(cmd)
	conn.commit()

	# 使用 fetchone() 方法获取一条数据库。
	data = cursor.fetchall()

	return True if data[0][0] == value else False


def generateData(length):
	data = ''
	collection = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j',
				  'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'A', 'B', 'C', 'D',
				  'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X',
				  'Y', 'Z']

	for i in range(length):
		index = random.randint(0, len(collection) - 1)
		c = collection[index]
		data += c

	return data


def cleanTable(conn):
	cursor = conn.cursor()

	cmd = "truncate table KvStorage;"
	cursor.execute(cmd)
	conn.commit()


def testBody(kLen, vLen, name, conn):
	for i in range(1000):
		key = generateData(kLen)
		value = generateData(vLen)
		start = time.time() * 1000
		res = test(key, value, conn)
		end = time.time() * 1000
		cleanTable(conn)

		content = ''
		if not res:
			print("ERROR!!!")
			content = "ERROR!!!!!\n"
		else:
			content = "   test time is: " + str(end - start) + "\n"
		file_object = open('res/' + name, 'a')
		file_object.write(content)
		file_object.close()

	print(name + " finish")

if __name__ == "__main__":
	# 打开数据库连接
	conn = pymysql.connect("localhost", "root", "123456", "dbtest")

	testBody(128, 128, "k128b-v128b", conn)
	testBody(128, 256, "k128b-v256b", conn)
	testBody(128, 512, "k128b-v512b", conn)
	testBody(128, 1 * 1024, "k128b-v1kb", conn)
	testBody(128, 2 * 1024, "k128b-v2kb", conn)
	testBody(128, 3 * 1024, "k128b-v3kb", conn)
	testBody(128, 4 * 1024, "k128b-v4kb", conn)
	testBody(128, 5 * 1024, "k128b-v5kb", conn)
	testBody(128, 6 * 1024, "k128b-v6kb", conn)

	conn.close()
