
"""
Запуская этот файл, ты можешь увидеть пример поста с которыми мы будем работать.
"""

import vk
from pprint import pprint



if __name__ == '__main__':
	session = vk.Session(access_token="d6c80e1ed6c80e1ed6c80e1ee3d6b194a5dd6c8d6c80e1eb796b3bad8d8dfb2e74f63fa")
	vk_api = vk.API(session, v='5.131')
	dict_of_all_post = vk_api.newsfeed.search(q='погода', # поисковое слово
											  count='2')  # количество постов
	pprint(dict_of_all_post)