from typing import List

def threeSum(nums: List[int]) -> List[List[int]]:
  triplets = []
  length = len(nums)
  numbers = nums[:]
  numbers.sort()

  # a + b = -c
  i = 0
  while i < length - 2:
    c_neg = numbers[i] * -1
    a_idx = i + 1
    b_idx = length - 1

    while a_idx < b_idx:
      a_num = numbers[a_idx]
      b_num = numbers[b_idx]
      ab_sum = a_num + b_num

      if ab_sum == c_neg:
        triplets.append([c_neg * -1, a_num, b_num])
        a_idx += 1
        b_idx -= 1

        while a_idx < b_idx and a_num == numbers[a_idx]:
          a_idx += 1
        while a_idx < b_idx and b_num == numbers[b_idx]:
          b_idx -= 1
      elif ab_sum < c_neg:
        a_idx += 1
      elif ab_sum > c_neg:
        b_idx -= 1

    while i < length - 2 and numbers[i] == numbers[i+1]:
      i += 1
    i += 1

  return triplets

if __name__ == "__main__":
  test = [-1,0,1,2,-1,-4]
  expect_result = [[-1, -1, 2], [-1, 0, 1]]
  assert threeSum(test) == expect_result, "Incorrect result"
  print(threeSum([-1,0,1,2,-1,-4]))
