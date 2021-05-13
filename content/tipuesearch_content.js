var tipuesearch = {"pages": [{'title': '組員', 'text': '40823117 潘奕丞 \n 40823122 吳家凱 \n', 'tags': '', 'url': '組員.html'}, {'title': 'w2', 'text': '', 'tags': '', 'url': 'w2.html'}, {'title': '網頁建立以及偕同修改', 'text': '\n \n \n \n', 'tags': '', 'url': '網頁建立以及偕同修改.html'}, {'title': 'w3', 'text': '', 'tags': '', 'url': 'w3.html'}, {'title': '分組網站', 'text': '分組倉儲: https://github.com/40823122/cd2021-stage1-ag13 \n 分組網站: https://40823122.github.io/cd2021-stage1-ag13/ . \n', 'tags': '', 'url': '分組網站.html'}, {'title': '產品', 'text': '間歇機構應用 動機: 看到工廠生產線裝箱，想嘗試把它做出來 \n 第二周:繪製零件 \n 第三周:模擬路徑 並且更正錯誤的地方 \n 第四周:報告 \n \n 分工: \n \xa0 \xa0 \xa0 \xa040823117{繪製零件} \n \xa0 \xa0 \xa0 \xa040823122{模擬，管理網頁} \n \n \n \n 組合圖: \n \n \n \n', 'tags': '', 'url': '產品.html'}, {'title': 'w4', 'text': '進行v-rep模擬 \n 模擬檔案: \n https://drive.google.com/drive/folders/13x3Xe0ds1fPr6RAyucfoqa4oqDRVobH3?usp=sharing \n 第1次模擬 \n \n 第2次模擬 \n \n \n 第3次模擬 \n \n 第4次模擬 \n \n 第5次模擬(最終版) \n \n', 'tags': '', 'url': 'w4.html'}, {'title': 'w5', 'text': 'w5分組報告影片 \n \n', 'tags': '', 'url': 'w5.html'}, {'title': 'w6', 'text': 'cd2021-stage2-ag7 \n 組員 \n 40823117潘奕丞 \n 倉儲 \n 網站 \n 40823122吳家凱 \n 倉儲 \n 網站 \n 40823129 汪昱呈 \n 倉儲 \n 網站 \n 40823149趙偉辰 \n 倉儲 \n 網站 \n', 'tags': '', 'url': 'w6.html'}, {'title': 'stage2分組網站建立', 'text': '分組網站 https://40823122.github.io/stage2/ \n \n \n', 'tags': '', 'url': 'stage2分組網站建立.html'}, {'title': 'w7', 'text': '', 'tags': '', 'url': 'w7.html'}, {'title': '整合分組網頁', 'text': 'GITHUB對照 \n', 'tags': '', 'url': '整合分組網頁.html'}, {'title': 'v-rep模擬', 'text': '模擬檔案 \n https://drive.google.com/file/d/1JB73CiSnaqF--JGZEHghcPWURzoZ-aOh/view?usp=sharing \n \n \n 內部齒輪的作動情況 \n \n \n 整體機構 \n \n \n', 'tags': '', 'url': 'v-rep模擬.html'}, {'title': '模擬遇到的問題', 'text': '(1) \n \n 圖中的齒輪在inventer組合玩沒有正常嚙和 \n \n 導入v-rep後會導致整個組合分散 \n \n (2) \n \n \n 圖中的連桿在第一次的版本中設計有問題 \n 導致做動的情況不如完成的情況 \n \n', 'tags': '', 'url': '模擬遇到的問題.html'}, {'title': 'w8', 'text': 'heroku(個人網站)同步網站 \n heroku(stage2)同步網站 \n 1.從  http://a.kmol.info:88/heroku.7z  下載 Heroku CLI， 解開壓縮至隨身碟Y槽。 \n 2.後修改start.bat檔案如下: \n \n 3. \n heroku login -i\nheroku git:remote -a 名稱 \n \n \n \n \n \n \n git push heroku\n \n \n', 'tags': '', 'url': 'w8.html'}, {'title': 'w10', 'text': '解決問題 \n', 'tags': '', 'url': 'w10.html'}, {'title': 'task1', 'text': '讀取 stage3_2a.txt, 建立 Stage3 的分組倉儲, 分組網頁, 以及各組員倉儲及網頁連結. \n # open file, default is read mode, since txt content no chinese char\n# no encoding = "UTF-08" is needed\nwith open("stage3_2a.txt") as fh:\n    # readlines will read into the whole line 2 and put into list format\n    # has \\n at the end of each line  (-stop-)\n    data = fh.readlines()\n    A = [a.replace (\'4823122\',\'40823122\') for a in data]\n    B = [b.replace (\'\\t\\t\\t\\t\',\'\') for b in A]\n#print(len(data))\n#寫出分組倉儲及網頁連結\nfor i in range(len(data)):\n    group = B[i].rstrip("\\n").split("\\t")\n    print(\'<p>\'+group[0]+\' | <a href ="https://\'+group[1]+\'.github.io/stage3-ag\'+group[0][9]+\'">網站</a> | <a href ="https://github.com/\'+group[1]+\'/stage3-ag\'+group[0][9]+\'">倉儲</a> \')\n# the following will use group data to generate (-copy-)needed html    \n#寫出個人倉儲及網頁連結\n    for x in range(2,18,2):\n        try:\n            print (  \'<p>\'+group[x]+\'| <a href ="https://\'+group[x]+\'.github.io/stage3-ag\'+group[0][9]+\'">stage3</a> | <a href ="https://\'+group[x]+\'.github.io/cd2021">網站</a> | <a href="https://github.com/\'+group[x]+\'/cd2021">倉儲</a></p>\')\n        except:\n            continue \n stage3_ag1 |  網站  |  倉儲 \n 40823131|  stage3  |  網站  |  倉儲 \n a40823112|  stage3  |  網站  |  倉儲 \n 40823123|  stage3  |  網站  |  倉儲 \n 40823145|  stage3  |  網站  |  倉儲 \n 40823136|  stage3  |  網站  |  倉儲 \n 40823109|  stage3  |  網站  |  倉儲 \n 40823116|  stage3  |  網站  |  倉儲 \n 40823108|  stage3  |  網站  |  倉儲 \n stage3_ag2 |  網站  |  倉儲 \n 40823151|  stage3  |  網站  |  倉儲 \n 40623121|  stage3  |  網站  |  倉儲 \n 40871106|  stage3  |  網站  |  倉儲 \n 40823102|  stage3  |  網站  |  倉儲 \n 40823104|  stage3  |  網站  |  倉儲 \n 40823106|  stage3  |  網站  |  倉儲 \n 40823101|  stage3  |  網站  |  倉儲 \n 40823132|  stage3  |  網站  |  倉儲 \n stage3_ag3 |  網站  |  倉儲 \n 40823119|  stage3  |  網站  |  倉儲 \n 40823150|  stage3  |  網站  |  倉儲 \n 40823103|  stage3  |  網站  |  倉儲 \n 40823107|  stage3  |  網站  |  倉儲 \n 40523252|  stage3  |  網站  |  倉儲 \n 40823154|  stage3  |  網站  |  倉儲 \n stage3_ag4 |  網站  |  倉儲 \n 40823142|  stage3  |  網站  |  倉儲 \n 40823144|  stage3  |  網站  |  倉儲 \n 40823127|  stage3  |  網站  |  倉儲 \n 40823148|  stage3  |  網站  |  倉儲 \n 40823121|  stage3  |  網站  |  倉儲 \n 40823135|  stage3  |  網站  |  倉儲 \n 40823114|  stage3  |  網站  |  倉儲 \n 40823146|  stage3  |  網站  |  倉儲 \n stage3_ag5 |  網站  |  倉儲 \n 40823111|  stage3  |  網站  |  倉儲 \n 40823115|  stage3  |  網站  |  倉儲 \n 40823128|  stage3  |  網站  |  倉儲 \n 40823120|  stage3  |  網站  |  倉儲 \n 40823140|  stage3  |  網站  |  倉儲 \n 40823124|  stage3  |  網站  |  倉儲 \n 40823139|  stage3  |  網站  |  倉儲 \n 40823126|  stage3  |  網站  |  倉儲 \n stage3_ag6 |  網站  |  倉儲 \n 40823152|  stage3  |  網站  |  倉儲 \n 40823110|  stage3  |  網站  |  倉儲 \n 40823122|  stage3  |  網站  |  倉儲 \n 40823125|  stage3  |  網站  |  倉儲 \n 40823117|  stage3  |  網站  |  倉儲 \n 40823129|  stage3  |  網站  |  倉儲 \n 40823149|  stage3  |  網站  |  倉儲 \n 40823153|  stage3  |  網站  |  倉儲 \n', 'tags': '', 'url': 'task1.html'}, {'title': 'task2', 'text': '', 'tags': '', 'url': 'task2.html'}, {'title': 'bubble', 'text': 'import sim as vrep\nimport sys\n# child threaded script: \n#simExtRemoteApiStart(19999)\n \nvrep.simxFinish(-1)\n \nclientID = vrep.simxStart(\'127.0.0.1\', 19999, True, True, 5000, 5)\n \nif clientID!= -1:\n    print("Connected to remote server")\nelse:\n    print(\'Connection not successful\')\n    sys.exit(\'Could not connect\')\n \nerrorCode,left_motor_handle=vrep.simxGetObjectHandle(clientID,\'bubbleRob_leftMotor\',vrep.simx_opmode_oneshot_wait)\n \nerrorCode,right_motor_handle=vrep.simxGetObjectHandle(clientID,\'bubbleRob_rightMotor\',vrep.simx_opmode_oneshot_wait)\n \nif errorCode == -1:\n    print(\'Can not find left or right motor\')\n    sys.exit()\n \nerrorCode=vrep.simxSetJointTargetVelocity(clientID,left_motor_handle,10, vrep.simx_opmode_oneshot_wait)\nerrorCode=vrep.simxSetJointTargetVelocity(clientID,right_motor_handle,30, vrep.simx_opmode_oneshot_wait)\n \n \n \n 下列兩行為左右輪的轉數 \n \n', 'tags': '', 'url': 'bubble.html'}, {'title': 'STAGE1\xa0 \xa0API', 'text': 'import sim as vrep\nimport sys\n# child threaded script: \n#simExtRemoteApiStart(19999)\n \nvrep.simxFinish(-1)\n \nclientID = vrep.simxStart(\'127.0.0.1\', 19999, True, True, 5000, 5)\n \nif clientID!= -1:\n    print("Connected to remote server")\nelse:\n    print(\'Connection not successful\')\n    sys.exit(\'Could not connect\')\nerrorCode,main_handle=vrep.simxGetObjectHandle(clientID,\'main\',vrep.simx_opmode_oneshot_wait)\n\n \nif errorCode == -1:\n    print(\'Can not find main\')\n    sys.exit()\n \nerrorCode=vrep.simxSetJointTargetVelocity(clientID,main_handle,10, vrep.simx_opmode_oneshot_wait)\n\n\n \n 模擬情況 \n', 'tags': '', 'url': 'STAGE1\xa0 \xa0API.html'}, {'title': 'STAGE2\xa0 \xa0API', 'text': 'import sim as vrep\nimport sys\n# child threaded script: \n#simExtRemoteApiStart(19999)\n \nvrep.simxFinish(-1)\n \nclientID = vrep.simxStart(\'127.0.0.1\', 19999, True, True, 5000, 5)\n \nif clientID!= -1:\n    print("Connected to remote server")\nelse:\n    print(\'Connection not successful\')\n    sys.exit(\'Could not connect\')\nerrorCode,main01_handle=vrep.simxGetObjectHandle(clientID,\'main01\',vrep.simx_opmode_oneshot_wait)\n\n \nif errorCode == -1:\n    print(\'Can not find main01\')\n    sys.exit()\n \nerrorCode=vrep.simxSetJointTargetVelocity(clientID,main01_handle,10, vrep.simx_opmode_oneshot_wait)\n\n\n \n 模擬情況 \n', 'tags': '', 'url': 'STAGE2\xa0 \xa0API.html'}, {'title': 'w11', 'text': '', 'tags': '', 'url': 'w11.html'}, {'title': 'w12', 'text': '', 'tags': '', 'url': 'w12.html'}, {'title': 'w13', 'text': '', 'tags': '', 'url': 'w13.html'}]};