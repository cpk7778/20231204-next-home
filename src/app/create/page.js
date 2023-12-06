"use client"
import {useRouter} from "next/navigation"; /*next/router -> next/navigation으로 변경*/

export default function Create() {
    const router = useRouter() /*클라인트 컴포넌트에서만 사용할 수 있는 useRouter*/
    return <form onSubmit={(evt) => {
        evt.preventDefault(); /*양식 실행 버튼으로 페이지 전환 막음*/
        const title = evt.target.title.value;
        const body = evt.target.body.value;
        const options = {
            method: 'POST', headers: {'Content-Type': 'application/json'}, body: JSON.stringify({title, body})
        }
        fetch(process.env.NEXT_PUBLIC_API_URL + 'topics', options)
            .then(res => res.json())
            .then(result => {
                console.log(result)
                const lastid = result.id; /*마지막 화면으로 리디렉션*/
                router.push(`/read/${lastid}`)
                router.refresh()
            })
    }}>

        <h1>Create</h1>
        <p>
            <input type="text" name="title" placeholder="title" required/>
        </p>
        <p>
            <textarea name="body" placeholder="body"></textarea>
        </p>
        <p>
            <input type="submit" value="submit"/>
        </p>
    </form>
}
