### 增 INSERT
```SQL
  INSERT INTO <表> (字段, ...) VALUES(值, ...);
  INSERT INTO user_table (username, password) VALUES('lisi', '111111');
```

### 删 DELETE
```SQL
  DELETE FROM <表> WHERE 条件;
  DELETE FROM user_table WHERE ID=2;
```

### 改 UPDATE
```SQL
UPDATE <表> SET 字段=新值,字段=新值,... WHERE 条件;
UPDATE user_table SET password='654321', username='blue2' WHERE ID=1;
```

### 查 SELECT  
```SQL
SELECT 字段列表 FROM <表> WHERE 条件 ORDER BY 字段 LIMIT 30,30;
```
 