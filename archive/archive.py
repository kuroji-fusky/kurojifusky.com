import waybackpy

url = "https://skepfusky.xyz"
user_agent = "Mozilla/5.0 (Linux; Android 5.0; SM-G900P Build/LRX21T) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/90.0.4430.93 Mobile Safari/537.36"

wb = waybackpy.Url(url, user_agent)
archive = wb.save()

print(archive.archive_url)