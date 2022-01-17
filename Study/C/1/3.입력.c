#include <stdio.h> // 입력 오류로 vscode로 더이상 진행불가, 해당 파트부터 vs2019로 진행

int main(void)
{
  int height;
  int length;
  int width;
  int volume;
  int weight;

  printf("Enter height of box: "); // 8
  scanf("%d", &height);
  printf("Enter length of box: "); // 12
  scanf("%d", &length);
  printf("Enter width of box: "); // 10
  scanf("%d", &width);

  volume = height * length * width;
  weight = (volume + 165) / 166;

  printf("Volume (cubic inches): %d\n", volume); // 960
  printf("Dimensional weight (pounds): %d\n", weight); // 6

  return 0;
}