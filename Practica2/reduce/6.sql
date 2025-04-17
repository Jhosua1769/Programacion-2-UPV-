SELECT c.CategoryName AS Categoria, p.ProductName AS Producto, MAX(p.UnitPrice) AS Precio
FROM Products p
JOIN Categories c ON p.CategoryID = c.CategoryID
WHERE p.UnitPrice = (
    SELECT MAX(UnitPrice)
    FROM Products
    WHERE CategoryID = p.CategoryID
)
GROUP BY c.CategoryName;

SELECT o.OrderID, o.OrderDate, od.ProductID, p.ProductName
FROM Orders o
JOIN OrderDetails od ON o.OrderID = od.OrderID
JOIN Products p ON od.ProductID = p.ProductID
WHERE p.ProductName LIKE '%pescado%';




SELECT ProductID, ProductName, SUM(Quantity) AS TotalVendido
FROM OrderDetails
GROUP BY ProductID, ProductName
ORDER BY TotalVendido DESC
LIMIT 1;
