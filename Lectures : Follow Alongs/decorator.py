def say_hello():
    print("Hello")

this_var_a_func = say_hello()

this_var_a_func()


def my_decorator(func()):
    print("Before")
    func()
    print("after")

def my_decorator()