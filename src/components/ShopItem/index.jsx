import './style.css';

export const ShopItem = ({ name, amount, bought }) => {
  const tickClass = bought ? 'btn-tick btn-tick--on' : 'btn-tick';
  return (
    <div className="shopitem">
      <button className={tickClass} />
      <div className="shopitem__name">{name}</div>
      <div className="shopitem__amount">{amount}</div>
      <button className="btn-delete">Smazat</button>
    </div>
  );
};
