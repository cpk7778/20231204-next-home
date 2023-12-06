"use client"
import Link from "next/link";
import {useParams, useRouter} from "next/navigation";

export function Control() {
    const params = useParams();
    const router = useRouter();
    const id = params.id;
    return (
        <>
            { } <button><Link href="/create">CREATE</Link></button>

            {id ? <>
                 {}
                <button><Link href={"/update/"+id}>UPDATE</Link></button>

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
    );
}