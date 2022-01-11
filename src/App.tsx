import React,{ useEffect } from 'react';
import './index.css';
import { useDispatch, useSelector } from 'react-redux';
import { getVariableSelector } from './redux/selectors';
import { fetchVariableRequest } from './redux/actions';

function App() {

  const dispatch = useDispatch();
  const variables = useSelector(getVariableSelector);
  // const errors = useSelector(getErrorSelector);

  useEffect(() => {
    dispatch(fetchVariableRequest());
  });

  return (
    <div className="App">
      {
        variables.map((variable, index) => (
          <div key={variable}>
            {++index} {variable};
          </div>
        ))
      }
    </div>
  );
}

export default App;
