"use client"
import Link from "next/link";
import {useParams, useRouter} from "next/navigation";

export function Control() {
    const params = useParams();
    const router = useRouter();
    const id = params.id;
    return (
        <>
            <h2>Control</h2>

            <Link href="/create">CREATE</Link> {}

            {id ? <> {/* conditional rendering pattern : {id ? <></> : null} */}
                | {}
                <Link href={"/update/" + id}>UPDATE</Link> | {}

                <input
                    type="button"
                    value="DELETE"
                    onClick={() => {
                        const options = {method: 'DELETE'}
                        fetch(process.env.NEXT_PUBLIC_API_URL + 'topics/' + id, options)
                            .then(resp => resp.json())
                            .then(result => {
                                router.push('/')
                                router.refresh()
                            });
                    }}/>
            </> : null
            }
        </>

/*    <ul>
        <li><Link href="/create">Create</Link></li>
        {id ? <>
            <li><Link href={"/update/" + id}>Update</Link></li>
            <li>
                <input
                    type="button"
                    value="delete"
                    onClick={() => {
                        const options = {method: 'DELETE'}
                        fetch(process.env.NEXT_PUBLIC_API_URL+'topics/' + id, options)
                            .then(resp => resp.json())
                            .then(result => {
                                router.push('/')
                                router.refresh()
                            });
                    }}/>
            </li>
        </> : null}
    </ul>*/
    );
}