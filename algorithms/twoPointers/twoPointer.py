def hasPairWitSumEqualToTarget(nums: list[int], target: int):
  left = 0 
  right = len(nums) - 1

  while (left < right):
    sum = nums[left] + nums[right]
    if (sum == target):
      return True
    else:
      if (sum > target):
        right -= 1
      else:
        left += 1 

  return False

# print("has a pair with sum equal to target ", hasPairWitSumEqualToTarget([1,2,3,4,6,8,10], 7)) 

def genSortedArrFromGivenTwoArr(arr1: list[int], arr2: list[int]):
    left = 0
    right = 0
    result = []
    
    while (left < len(arr1) and right < len(arr2)):
        if (arr1[left] < arr2[right]):
            result.append(arr1[left])
            left += 1
        else:
            result.append(arr2[right])
            right += 1
            
    return result

# print("ans ", genSortedArrFromGivenTwoArr([1,4,5,6,9,10], [2,3,7])) 


def sortArrayInAscOrder (arr: list[int]):
    left = 0
    right = len(arr)  - 1
    ans = arr
    
    curr = 0
    
    for i,val in enumerate(arr):
        if (arr[left] > arr[right]):
            arr[right] = arr[left]
            curr = ans[left]
        else:
            ans.append(arr[left])
            right -= 1
    return ans
        
            
        

            
    

print('ans ', sortArrayInAscOrder([9,4,5,1,2,3]))
            
    
        
        