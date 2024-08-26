const protectedRoutes = require('./routes/protectedRoutes');

app.use('/api/protected', protectedRoutes);