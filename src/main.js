// const div = dom.create("<div>newDiv</div>");
// console.log(div);

// dom.after(test, div)


// const div3 = dom.create("<div id='parent'> </div>")
// dom.warp(test, div3)

// const nodes = dom.empty(window.empty)
// console.log(nodes);

// dom.attr(test, 'title', 'Hi, I am SB')

// const title = dom.attr(test, 'title')
// console.log(`title: ${title}`);

// const newText = dom.text(test, "我是新的内容")
// console.log(dom.text(test));


// dom.style(test, { border: '1px solid red', color: 'red' })
// console.log(dom.style(test, 'border'));
// dom.style(test, 'border', '1px solid black')

// dom.class.add(test, 'pink')
// dom.class.remove(test, 'pink')
// console.log(
//     dom.class.has(test, 'pink')
// );

// const fn = () => {
//     console.log('点击了');
// }
// dom.on(test, 'click', fn)
// dom.off(test, 'click', fn)

// const testDiv = dom.find('#test')[0]
// console.log(testDiv);

// const test2 = dom.find('#test2')[0]
// console.log(dom.find('.red', test2));

// console.log(dom.parent(test));
// console.log(dom.children(test2));

// let s2 = dom.find("#s2")[0]
// console.log(dom.siblings(s2));
// console.log(dom.next(s2));
// console.log(dom.previous(s2));

// const t = dom.find('#travel')[0]
// dom.each(dom.children(t), (n) => dom.style(n, 'color', 'red'))

// console.log(dom.index(s2));

const div = dom.find('#test>.red')[0]
dom.style(div, 'color', 'red')

const divList = dom.find('.red') // 获取多个 div.red 元素
dom.each(divList, (n) => console.log(n)) // 遍历 divList 里的所有元素