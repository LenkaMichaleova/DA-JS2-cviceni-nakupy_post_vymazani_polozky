import './style.css';

export const ShopItem = ({id, name, amount, bought }) => {
  const tickClass = bought ? 'btn-tick btn-tick--on' : 'btn-tick';
  return (
    <div className="shopitem">
      <button className={tickClass} data-id={id}/>
      <div className="shopitem__name">{name}</div>
      <div className="shopitem__amount">{amount}</div>
      <button className="btn-delete" data-id={id}>Smazat</button>
    </div>
  );
};
