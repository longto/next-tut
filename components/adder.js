export default ({ onAdd, onMinus }) => (
    <div>
        <style jsx>{`
      button {
        border: solid 1px blue;
      }
    `}</style>
        <span>Here goes the control</span>
        <button onClick={onAdd}>+</button>
        <button onClick={onMinus}>-</button>
    </div>
)