export default function Test() {
    return (
        <div>
            <h1>Greeting to all teachers of computer science</h1>
            <Greeting name="ชวลิต" lastname="โควีระวงศ์" />
            <Greeting name="ณัฐรดี" lastname="อนุพงค์" />
            <Greeting name="วิศรุต" lastname="ขวัญคุ้ม" />
            <Greeting name="ดาวรถา" lastname="วีระพันธ์" />
            <Greeting name="ประณมกร" lastname="อัมพรพรรดิ์" />
            <Greeting name="ณัฏฐิรา" lastname="ศุขไพบูลย์" />
        </div>
    );
}

function Greeting({ name, lastname }) {
    return <h1>Hello, {name} {lastname} !</h1>;
}
function Greeting2({ name="Compouter", lastname="Science" }) {
    return <h1>Hello, {name} {lastname} !</h1>;
}