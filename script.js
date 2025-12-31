// 抓取所有的按鈕
  const buttons = document.querySelectorAll('button');

  buttons.forEach(button => {
    button.addEventListener('click', () => {
      // 邏輯 A：單選（點擊一個，其他取消選取）
      buttons.forEach(btn => btn.classList.remove('selected'));
      button.classList.add('selected');

      /* // 邏輯 B：複選（點擊可以開啟或關閉）
      // 如果想改複選，請把上面兩行換成：
      // button.classList.toggle('selected');
      */
    });
  });