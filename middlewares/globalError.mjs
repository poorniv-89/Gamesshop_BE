const globalError = (err, _req, res, next) => {
    res.status(500).json({ 
        Error: err.message });
  };
  
  export default globalError;