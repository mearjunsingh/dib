
# [5, 3, 7], target = 45
def find_number(arr, target):
  if not arr:
    return False
  
  stora = {}

  for i in range(len(arr)):
    if arr[i] in stora.values():
      return True
      # return [arr[i], stora[i]] # later

    complement = target - arr[i] # 8 - 5 = 3

    stora[arr[i]] = complement # 3 gets stored first

  return False

print(find_number([5, 3, 7], 488))



  
