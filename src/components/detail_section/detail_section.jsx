import React, { useEffect } from 'react';
import styles from './detail_section.module.css'
const DetailSection = (props) => {
    const counter = ($counter, max) => {
        let now = max;
        const handle = setInterval(() => {
            $counter.innerHTML = Math.ceil(max - now);
            // 목표수치에 도달하면 정지
            if (now < 0) {
                clearInterval(handle);
            }
            // 증가되는 값이 계속하여 작아짐
            const step = now / 10;
            // 값을 적용시키면서 다음 차례에 영향을 끼침
            now -= step;
        }, 50);
    }
    useEffect(() => {
        const $counter1 = document.querySelector("#first");
        const $counter2 = document.querySelector("#second");
        const $counter3 = document.querySelector("#third");
        // 목표 수치
        const max1 = 350;
        const max2 = 21;
        const max3 = 650;
        setTimeout(() => counter($counter1, max1), 500);
        setTimeout(() => counter($counter2, max2), 21);
        setTimeout(() => counter($counter3, max3), 650);
    }, [])
    return (
        <div className={styles.detail_section}>
            <p className={styles.detail_section_p}>  <strong id="first"></strong><strong>만명의</strong>의 여행자</p>
            <p className={styles.detail_section_p}>  <strong id="second"></strong><strong>개</strong>의 여행 리뷰</p>
            <p className={styles.detail_section_p}>  <strong id="third"></strong><strong>개</strong>의 여행 일정</p>
        </div>);
}
export default DetailSection;
