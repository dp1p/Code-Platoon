def my_decorator(func):
    def wrapper():
        print("Before")
        func()
        print("after")

@my_decorator
def something():
    print('something')