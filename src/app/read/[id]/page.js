export default async function Read(props) {
    const id = props.params.id;
    const resp = await fetch(process.env.NEXT_PUBLIC_API_URL + `topics/${props.params.id}`, {cache: 'no-store'});
    const topic = await resp.json();
    return <>
        <h1>{topic.title}</h1>
        <p>{topic.body}</p>

    </>
}