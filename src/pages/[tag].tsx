import { GetServerSideProps } from 'next/types'
import Head from 'next/head'
import styles from '@/styles/Main.module.scss'
import Topbar from '@/components/before/Topbar/Topbar'
import ArticleList from '@/components/before/Main/ArticleList/ArticleList'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { apiUrl } from 'public/url'

type Props = {
    id: string
    postData: [any],
    topList: any[]
}

export default function Home({ id, postData, topList }: Props) {

    // 从Topbar组件获取其高度来设置main区域顶部内边距
    // （>100）checked为false，不选中，为120px
    // （<100）checked为true，单选框选中，为70px
    const [isCheckd, setIsCheckd] = useState(false)
    const checkedHandler = (h: boolean) => {
        setIsCheckd(h);
    }
    useEffect(() => {
        const ipt: any = document.querySelector('#ipt');
        isCheckd ? ipt.checked = true : ipt.checked = false
    }, [isCheckd])

    return (
        <>
            <Head>
                <title>{id}</title>
                <meta name="description" content="在字节跳动第五届青训营最终实战的使用next.js完成的静态仿掘金项目" />
                <meta name="keywords" content="next.js 仿掘金 青训营 第五届 字节跳动" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className={styles.box}>
                <Topbar topList={topList} hHandler={checkedHandler} hideTags={false}></Topbar>
                <input type="checkbox" className={`${styles.ipt} `} id="ipt" />
                <div className={`${styles.content} w`}>
                    <div className={styles.main}>
                        <div className={styles.sort}>
                            <Link href='/'>推荐</Link>
                            <Link href='/'>热门</Link>
                            <Link href='/'>最新</Link>
                        </div>
                        <ArticleList postData={postData}></ArticleList>
                    </div>
                    <div className={styles.right}>
                        111
                    </div>

                </div>
            </main>
        </>
    )
}

export const getServerSideProps: GetServerSideProps = async (context) => {



    const { tag } = context.query;

    // const res = await fetch(`${apiUrl}article/${tag}`).then(res => res.json());
    // const topbars = await fetch(`${apiUrl}/topbar/getAllTopbar`).then(res => res.json());

    const topbars = [{
        "_id": "63d12536a2a4ba3fc084d8b0",
        "hasTags": true,
        "name": "首页",
        "id": "recommended",
        "tags": [
            {
                "name": "综合",
                "id": "/"
            }
        ],
        "isCate": true
    }, {
        "_id": "63d12536a2a4ba3fc084d8b1",
        "name": "cdsd",
        "id": "sdsd",
        "hasTags": false,
        "tags": [],
        "isCate": true
    }, {
        "_id": {
            "$oid": "63d1e40713b97d9649e50bf8"
        },
        "name": "沸点",
        "id": "fool",
        "hasTags": false,
        "tags": [],
        "isCate": true
    }]

    const res = [{
        "_id": {
          "$oid": "63c6702d22bcbe942219dd1d"
        },
        "id": "63c66f3422bcbe942219dd1b",
        "author": "张三",
        "title": "Two Forms of Pre-rendering",
        "contentHtml": "Next.js has two forms of pre-rendering: **Static Generation** and **Server-side Rendering**. The difference is in **when** it generates the HTML for a page.- **Static Generation** is the pre-rendering method that generates the HTML at **build time**. The pre-rendered HTML is then _reused_ on each request.- **Server-side Rendering** is the pre-rendering method that generates the HTML on **each request**.Importantly, Next.js lets you **choose** which pre-rendering form to use for each page. You can create a 'hybrid' Next.js app by using Static Generation for most pages and using Server-side Rendering for others.",
        "tags": [
          "预渲染",
          "next.js",
          "两种形式"
        ],
        "createdTime": {
          "$date": {
            "$numberLong": "1673948980993"
          }
        },
        "__v": 0
      },{
        "_id": {
          "$oid": "63c67314c9e3cd4ca5de0090"
        },
        "id": "63c670fcc9e3cd4ca5de0087",
        "author": "李四",
        "title": "When to Use Static Generation v.s. Server-side Rendering",
        "contentHtml": "We recommend using **Static Generation** (with and without data) whenever possible because your page can be built once and served by CDN, which makes it much fasterthan having a server render the page on every request.You can use Static Generation for many types of pages, including:- Marketing pages- Blog posts- E-commerce product listings- Help and documentatio You should ask yourself: 'Can I pre-render this page **ahead** of a user's request? If the answer is yes, then you should choose Static Generation.On the other hand, Static Generation is **not** a good idea if you cannot pre-render a page ahead of a user's request. Maybe your page shows frequently updated data, and the page content changes on every request.In that case, you can use **Server-Side Rendering**. It will be slower, but the pre-rendered page will always be up-to-date. Or you can skip pre-rendering and use client-side JavaScript to populate data.",
        "tags": [
          "静态VS服务端渲染"
        ],
        "createdTime": {
          "$date": {
            "$numberLong": "1673949436274"
          }
        },
        "__v": 0
      },{
        "_id": {
          "$oid": "63c6ae037b8eeaf0b88c6478"
        },
        "author": "网络摘抄",
        "title": "md语法测试",
        "contentHtml": "# Welcome to Leanote! 欢迎来到Leanote!\n \n## 1. 排版\n \n**粗体** *斜体* \n \n~~这是一段错误的文本。~~\n \n引用:\n \n> 引用Leanote官方的话, 为什么要做Leanote, 原因是...\n \n有充列表:\n 1. 支持Vim\n 2. 支持Emacs\n \n无序列表:\n \n - 项目1\n - 项目2\n \n \n## 2. 图片与链接\n \n图片:\n![leanote](http://leanote.com/images/logo/leanote_icon_blue.png)\n链接:\n \n[这是去往Leanote官方博客的链接](http://leanote.leanote.com)\n \n## 3. 标题\n \n以下是各级标题, 最多支持5级标题\n \n```\n# h1\n## h2\n### h3\n#### h4\n##### h4\n###### h5\n```\n \n## 4. 代码\n \n示例:\n \n    function get(key) {\n        return m[key];\n    }\n    \n代码高亮示例:\n \n``` javascript\n/**\n* nth element in the fibonacci series.\n* @param n >= 0\n* @return the nth element, >= 0.\n*/\nfunction fib(n) {\n  var a = 1, b = 1;\n  var tmp;\n  while (--n >= 0) {\n    tmp = a;\n    a += b;\n    b = tmp;\n  }\n  return a;\n}\n \ndocument.write(fib(10));\n```\n \n```python\nclass Employee:\n   empCount = 0\n \n   def __init__(self, name, salary):\n        self.name = name\n        self.salary = salary\n        Employee.empCount += 1\n```\n \n# 5. Markdown 扩展\n \nMarkdown 扩展支持:\n \n* 表格\n* 定义型列表\n* Html 标签\n* 脚注\n* 目录\n* 时序图与流程图\n* MathJax 公式\n \n## 5.1 表格\n \nItem     | Value\n-------- | ---\nComputer | \\$1600\nPhone    | \\$12\nPipe     | \\$1\n \n可以指定对齐方式, 如Item列左对齐, Value列右对齐, Qty列居中对齐\n \n| Item     | Value | Qty   |\n| :------- | ----: | :---: |\n| Computer | \\$1600 |  5    |\n| Phone    | \\$12   |  12   |\n| Pipe     | \\$1    |  234  |\n \n \n## 5.2 定义型列表\n \n名词 1\n:   定义 1（左侧有一个可见的冒号和四个不可见的空格）\n \n代码块 2\n:   这是代码块的定义（左侧有一个可见的冒号和四个不可见的空格）\n \n        代码块（左侧有八个不可见的空格）\n \n## 5.3 Html 标签\n \n支持在 Markdown 语法中嵌套 Html 标签，譬如，你可以用 Html 写一个纵跨两行的表格：\n \n    <table>\n        <tr>\n            <th rowspan=\"2\">值班人员</th>\n            <th>星期一</th>\n            <th>星期二</th>\n            <th>星期三</th>\n        </tr>\n        <tr>\n            <td>李强</td>\n            <td>张明</td>\n            <td>王平</td>\n        </tr>\n    </table>\n \n \n<table>\n    <tr>\n        <th rowspan=\"2\">值班人员</th>\n        <th>星期一</th>\n        <th>星期二</th>\n        <th>星期三</th>\n    </tr>\n    <tr>\n        <td>李强</td>\n        <td>张明</td>\n        <td>王平</td>\n    </tr>\n</table>\n \n**提示**, 如果想对图片的宽度和高度进行控制, 你也可以通过img标签, 如:\n \n<img src=\"http://leanote.com/images/logo/leanote_icon_blue.png\" width=\"50px\" />\n \n## 5.4 脚注\n \nLeanote[^footnote]来创建一个脚注\n  [^footnote]: Leanote是一款强大的开源云笔记产品.\n \n## 5.5 目录\n \n通过 `[TOC]` 在文档中插入目录, 如:\n \n[TOC]\n \n## 5.6 时序图与流程图\n \n```sequence\nAlice->Bob: Hello Bob, how are you?\nNote right of Bob: Bob thinks\nBob-->Alice: I am good thanks!\n```\n \n流程图:\n \n```flow\nst=>start: Start\ne=>end\nop=>operation: My Operation\ncond=>condition: Yes or No?\n \nst->op->cond\ncond(yes)->e\ncond(no)->op\n```\n \n> **提示:** 更多关于时序图与流程图的语法请参考:\n \n> - [时序图语法](http://bramp.github.io/js-sequence-diagrams/)\n> - [流程图语法](http://adrai.github.io/flowchart.js)\n \n## 5.7 MathJax 公式\n \n$ 表示行内公式： \n \n质能守恒方程可以用一个很简洁的方程式 $E=mc^2$ 来表达。\n \n$$ 表示整行公式：\n \n$$\\sum_{i=1}^n a_i=0$$\n \n$$f(x_1,x_x,\\ldots,x_n) = x_1^2 + x_2^2 + \\cdots + x_n^2 $$\n \n$$\\sum^{j-1}_{k=0}{\\widehat{\\gamma}_{kj} z_k}$$\n \n更复杂的公式:\n$$\n\\begin{eqnarray}\n\\vec\\nabla \\times (\\vec\\nabla f) & = & 0  \\cdots\\cdots梯度场必是无旋场\\\\\n\\vec\\nabla \\cdot(\\vec\\nabla \\times \\vec F) & = & 0\\cdots\\cdots旋度场必是无散场\\\\\n\\vec\\nabla \\cdot (\\vec\\nabla f) & = & {\\vec\\nabla}^2f\\\\\n\\vec\\nabla \\times(\\vec\\nabla \\times \\vec F) & = & \\vec\\nabla(\\vec\\nabla \\cdot \\vec F) - {\\vec\\nabla}^2 \\vec F\\\\\n\\end{eqnarray}\n$$",
        "tags": [
          "数据结构",
          "js"
        ],
        "id": "63c6ae037b8eeaf0b88c6477",
        "createdTime": {
          "$date": {
            "$numberLong": "1673965059734"
          }
        },
        "__v": 0
      },{
        "_id": {
          "$oid": "63c6ae657b8eeaf0b88c647b"
        },
        "author": "TT笑脸",
        "title": "Js数组去重",
        "contentHtml": "# Marked React - Markdown Parser for React\n\n[Marked React] lets you render [Markdown] into react without using [dangerouslySetInnerHTML]. It uses [marked] under the hood to parse markdown.\n\nMarkdown is a simple text format whose goal is to be very easy to read and write, even when not converted to HTML. This demo page will let you type anything you like and see how it gets converted. Live. No more waiting around.\n\n## How To Use The Demo\n\n1. Type in stuff on the control panel.\n2. See the live updates on the storybook.\n\nThat's it. Pretty simple.\n\n## Why Markdown?\n\nIt's easy. It's not overly bloated, unlike HTML. Also, as the creator of [markdown] says,\n\n> The overriding design goal for Markdown's formatting syntax is to make it as readable\n> as possible. The idea is that a Markdown-formatted document should be\n> publishable as-is, as plain text, without looking like it's been marked up with tags\n> or formatting instructions.",
        "tags": [
          "interviewQuestion"
        ],
        "id": "63c6ae657b8eeaf0b88c647a",
        "createdTime": {
          "$date": {
            "$numberLong": "1673965157190"
          }
        },
        "__v": 0
      },{
        "_id": {
          "$oid": "63c6aea27b8eeaf0b88c647e"
        },
        "author": "TT笑脸",
        "title": "js实现深拷贝",
        "contentHtml": "js实现深拷贝\n前置知识：\n开始\n（一）、基本类型\n（二）、object类型\nMap\nSet\nArray和普通Object\n结束\n前置知识：\n浅拷贝：复制一个对象后，改变该对象，原对象的值也随之改变\n深拷贝：改变复制之后的对象，原对象的值不会发生变化\n\n\n// 浅拷贝：\nconst num1 = 9;\nlet num2 = num1;\nnum2 = 999;\nconsole.log(num1, num2);  // 9，999\n\n// 深拷贝：\nconst arr1 = [1, 2, 3];\nlet arr2 = arr1;\narr2[0] = 0\nconsole.log(arr1, arr2);  // [0,2,3], [0,2,3]\n\n此外，如果想深入了解你还需了解原型链\n\n开始\n我们可以创建一个函数，把要复制的那个对象传入\n\nfunction deepClone(obj){\n\n}\n我们会对传入的数据进行判断，不同的类型会有不同的操作\n\n（一）、基本类型\n首先，如果传入的是一个基本类型数据（String、Number、boolean、null、undefined），那么我们什么都不需要做，直接将该值返回即可\n\n我们可以通过typeof来判断数据的大致类型：\n\n类型\t结果\nUndefined\t“undefined”\nNull\t“object”\nBoolean\t“boolean”\nNumber\t“number”\nBigInt\t“bigint”\nString\t“string”\nSymbol\t“symbol”\nFunction\t“function”\n其他任何对象\t“object”\n从上表可以看出，除了“其他任何对象”外，其余类型我们均需要直接返回\t\nif(typeof(obj) !== 'object' || obj === null){\n\treturn obj;\n}\n（二）、object类型\n接下来，就该object包含的的各种数据类型了，在这里，我就只是简单的判断下Array，Object，Map，Set，其余类型可以自己尝试\n如果要检测数据的具体类型，就不能1单纯使用typeof了（因为typeof返回的都是”object”），我们可以使用instanceof，如果你正困惑与instanceof，可以先去了解一下instanceof\ninstance运算符简介\n\nMap\nif(obj instanceof Map){\n\t//new会重新开辟一份空间\n\tconst temp = new Map();\n\tobj.forEach((val, key)=>{\n\t//map的键只能是字符串，因此键直接传递即可\n\t//如果map里的值同样是object类型，同样需要进行深拷贝，因此进行递归\n\t\ttemp.set(key,deepClone( val ));\n\t})\n\treturn temp;\n}\nSet\nelse if(obj instanceof Set){\n\t//new会重新开辟一份空间\n\tconst temp = new Set();\n\tobj.forEach((val)=>{\n\t//如果set里的值同样是object类型，同样需要进行深拷贝，因此进行递归\n\t\ttemp.add( deepClone( val ));\n\t}\n\treturn temp;\n}\nArray和普通Object\nelse{\n\t//如果传入的是Array => obj.constructor()就i相当于[ ]\n\t//如果传入的是Object=> obj.constructor()就i相当于{ }\n\tconst temp = new obj.constructor();\n\tfor(const i in obj){\n\t\ttemp[i] = deepClone( obj[i] );\n\t}\n\treturn temp;\n}\n结束\n至此，我们就完成了js中四种类型的深拷贝，js中的类型还有很多，但基本思路也大体是这样了",
        "tags": [
          "interviewQuestion",
          "js"
        ],
        "id": "63c6aea27b8eeaf0b88c647d",
        "createdTime": {
          "$date": {
            "$numberLong": "1673965218022"
          }
        },
        "__v": 0
      }]

    return {
        props: {
            id: tag,
            postData: res,
            topList: topbars,
        }
        // props: {
        //     id: tag,
        //     postData: res,
        //     topList: topbars,
        // }
    }
}