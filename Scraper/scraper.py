"""
Это просто наработка/скилет будущий програмы.
Сейчас я разбиваю задачу на функций, у каждой из которых будет органиченный узкий функционал, характерезующий ее.
"""

import vk
from time import sleep


def search_by_key(vk_api, key):
	dict_of_all_post = vk_api.newsfeed.search(q=key, count="some_int", start_from=next_from)
	return dict_of_all_post


def get_filter_dict(muddy_dict):
	
	

def insert_to_db(filter_list):
	pass




if __name__ == '__main__':
	session = vk.Session(access_token="d6c80e1ed6c80e1ed6c80e1ee3d6b194a5dd6c8d6c80e1eb796b3bad8d8dfb2e74f63fa")
	vk_api = vk.API(session, v="5.131")

	while True:
		search_by_key(...)
		sleep(...)
