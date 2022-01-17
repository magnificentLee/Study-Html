#include <stdio.h>

int main(void) {
    int height; // 변수 선언방법1
    height = 8;
    int length = 16; // 변수 선언방법2
    int h, l; // 복수의 변수 선언방법(가독성에 좋지 않아 지양해야하는 방법임)
    h = 24;
    l = 36;
    // float 형 변수의 선언 방법
    // float profit; profit = 256.21; 혹은 float profit; profit = 256.21f; (보통 float형 변수의 상수끝에 f를 붙임)
    float profit;
    profit = 256.21f;
    printf("%i\n", height);
    printf("%i\n", length);
    printf("%i %i\n", h, l);
    printf("%f\n", profit);
    // 변수의 출력
    printf("Height: %d\n", height); // double 형은 int형 변수만 대신할 수 있음
    printf("Length: %i\n", length); // int 형 그대로 출력도 가능
    printf("Profit: %f\n", profit); // float 형은 f로
    printf("Profit: %.2f\n", profit); // 소숫점 자릿수만큼 조절도 가능
    return 0;
}