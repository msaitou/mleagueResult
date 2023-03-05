import json
import yt_dlp
import os
# import yt_dlp as YoutubeDL


def getFile(fName, isTxt=False):
    file = open(ｆName, 'r', encoding="utf8")
    if isTxt:
        data = file.read()
        urls = data.split("\n")
        file.close()
        return urls
    else:
        return json.load(file)


setting = getFile('settings.json')  # 設定ファイル読み込み
urls = getFile(f"tmp/{setting['t_file']}.txt", True)  # DLURLの取得
progF = f"tmp/{setting['t_file']}.json"  # 進捗状況データファイル
progData = {}  # 進捗状況データ

if not os.path.isfile(progF):
    print(1)
    with open(progF, mode='w') as f:
        print(2)
        for url in urls:
            if url != "":
                progData[url] = False
        json.dump(progData, f, indent=2)
        f.close()
else:
    progData = getFile(progF)
# print(urls)
opt = {
    'format': 'worst.3',
    'username': setting["username"],
    'password': setting["password"],
    "outtmpl": setting["dl_pass"] + "%(title)s.%(ext)s",
}
""" https://masayoshi-9a7ee.hatenablog.com/entry/2021/11/06/112639 """
with yt_dlp.YoutubeDL(opt) as ydl:  # yt_dlp.YoutubeDL()をforで繰り返すとダメ
    for url in filter(lambda x: not x[1], progData.items()):
        # print(url[0])
        ydl.download([url[0]])
        progData[url[0]] = True
        with open(progF, mode='w') as f:
            json.dump(progData, f, indent=2)
