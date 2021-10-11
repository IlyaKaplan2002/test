
"""
Запуская этот файл, ты можешь увидеть пример поста с которыми мы будем работать.
"""

# import vk
# from pprint import pprint


# if __name__ == '__main__':
#     session = vk.Session(
#         access_token="d6c80e1ed6c80e1ed6c80e1ee3d6b194a5dd6c8d6c80e1eb796b3bad8d8dfb2e74f63fa")
#     vk_api = vk.API(session, v='5.131')
#     dict_of_all_post = vk_api.newsfeed.search(q='погода',  # поисковое слово
#                                               count='1')  # количество постов
#     pprint(dict_of_all_post)

example = {'count': 1000,
           'items': [{'comments': {'count': 0},
                      'date': 1633708742,
                      'donut': {'is_donut': False},
                      'from_id': 218095061,
                      'id': 2010447,
                      'likes': {'can_like': 0, 'count': 0, 'user_likes': 0},
                      'marked_as_ads': 0,
                      'owner_id': -46936573,
                      'parents_stack': [],
                      'post_id': 2010417,
                      'post_type': 'reply',
                      'reposts': {'count': 0},
                      'short_text_rate': 0.8,
                      'text': 'А вот и начало реформы такси, о которой я говори. Далее '
                      'контроль за водителями усилится в несколько раз. Он '
                      'нежелаемого заказа отказаться они уже не смогут, а так же '
                      'не смогут в "нелётную" погоду по собственному нежеланию '
                      'не выйти на работу. Ну и порядок ценообразования будет '
                      'чётко контролироваться и понятия "праздничный тариф" и '
                      '"высокий спрос" уйдут в прошлое.'}],
           'next_from': '1/-46936573_2010447',
           'total_count': 35085533}

print(type(example))
print(example.keys())
print(example.items)
# print(list(example.items))
# for i in example.items:
#     print(i.text)
