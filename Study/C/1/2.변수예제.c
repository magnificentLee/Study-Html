// 박스의 용적 중량을 연산하는 문제
// weight = (volume + 165) / 166; 일때
// 높이, 길이, 너비가 주어질때 부피, 중량을 출력하시오
// 각각 8, 12, 10
#include <stdio.h>

int main(void) {
    int height;
    int length;
    int width;
    int volume;
    int weight;

    height = 8;
    length = 12;
    width = 10;

    volume = height * length * width;
    weight = (volume + 165) / 166;

    printf("Dimensions: %dx%dx%d\n", length, width, height);
    printf("Volume (cubic inches): %d\n", volume);
    printf("Volume (cubic inches): %d\n", height * length * width); // 뒤에서 계산후 출력도 가능함
    printf("Dimensional weight (pounds): %d\n", weight);
    return 0;
}