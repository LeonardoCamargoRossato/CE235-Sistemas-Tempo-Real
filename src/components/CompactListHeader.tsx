type Props={list:string;lab:string;title:string};
export default function CompactListHeader({list,lab,title}:Props){
 return <section className="compact-list-header"><div className="container compact-list-header__row">
   <div className="compact-list-header__badges"><span>CE-235 · {list}</span><b>{lab}</b></div>
   <h1>{title}</h1>
 </div></section>
}