import numpy as np 

arr = np.array([3, 15, 8, 22, 7])

mask = arr < 10

arr[mask] = 0
print(np.sum(arr))