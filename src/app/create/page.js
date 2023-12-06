"use client"
import { useRouter } from "next/navigation"; /*next/router -> next/navigation으로 변경*/

export default function Create(){
    const router = useRouter() /*클라인트 컴포넌트에서만 사용할 수 있는 useRouter*/
    return (
        <form onSubmit={(e)=>{
            e.preventDefault(); /*양식 실행 버튼으로 페이지 전환 막음*/
            const title = e.target.title.value;
            const body = e.target.body.value;
            const options = {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({title, body})
            }
            fetch('http://localhost:9999/topics', options)
                .then(res=>res.json())
                .then(result=>{
                    console.log(result)
                    const lastid = result.id; /*마지막 화면으로 리디렉션*/
                    router.push(`/read/${lastid}`)
                })
        }}>

            <p>
                <input type="text" name="title" placeholder="title" />
            </p>
            <p>
                <textarea name="body" placeholder="body"></textarea>
            </p>
            <p>
                <input type="submit" value="create" />
            </p>
        </form>
    )
}